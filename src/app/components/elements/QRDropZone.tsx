/**
 * QR Code Drop Zone Component
 * Allows users to drag and drop QR code images to extract addresses
 */

import React, { FC, useCallback, useState, useRef, DragEvent } from "react";
import classNames from "clsx";
import {
  scanQRFromFile,
  getQRErrorMessage,
} from "lib/qr-decoder/html5-scanner";
import { ReactComponent as QRIcon } from "app/icons/qr-code.svg";
import { ReactComponent as UploadIcon } from "app/icons/upload.svg";
import { ReactComponent as SuccessIcon } from "app/icons/success.svg";
import { ReactComponent as ErrorIcon } from "app/icons/circle-warning.svg";

interface QRDropZoneProps {
  onAddressExtracted: (address: string) => void;
  className?: string;
  disabled?: boolean;
}

type DropState = "idle" | "dragover" | "processing" | "success" | "error";

const QRDropZone: FC<QRDropZoneProps> = ({
  onAddressExtracted,
  className,
  disabled = false,
}) => {
  const [dropState, setDropState] = useState<DropState>("idle");
  const [message, setMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCountRef = useRef(0);

  const resetState = useCallback(() => {
    setTimeout(() => {
      setDropState("idle");
      setMessage("");
    }, 2000);
  }, []);

  const processFile = useCallback(
    async (file: File) => {
      console.log("🎯 QRDropZone: File received", file);
      if (disabled) return;

      console.log("✅ QRDropZone: Starting scan process");
      setDropState("processing");
      setMessage("Scanning QR code...");

      try {
        console.log("📞 QRDropZone: Calling scanQRFromFile");
        const result = await scanQRFromFile(file);
        console.log("📋 QRDropZone: Scan result", result);

        if (result.success && result.data) {
          setDropState("success");
          setMessage(
            `Address found: ${result.data.slice(0, 6)}...${result.data.slice(-4)}`,
          );
          onAddressExtracted(result.data);
          resetState();
        } else {
          setDropState("error");
          const errorMessage = result.success
            ? "No valid address found in QR code"
            : result.error || "Unknown error occurred";
          setMessage(getQRErrorMessage(errorMessage));
          resetState();
        }
      } catch {
        setDropState("error");
        setMessage("Failed to process image");
        resetState();
      }
    },
    [disabled, onAddressExtracted, resetState],
  );

  const handleDragEnter = useCallback(
    (e: DragEvent) => {
      // Only prevent default if dragging files
      if (e.dataTransfer && e.dataTransfer.types.includes("Files")) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (disabled) return;

      dragCountRef.current++;
      if (dragCountRef.current === 1) {
        setDropState("dragover");
        setMessage("Drop QR code image here");
      }
    },
    [disabled],
  );

  const handleDragLeave = useCallback(
    (e: DragEvent) => {
      // Only prevent default if dragging files
      if (e.dataTransfer && e.dataTransfer.types.includes("Files")) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (disabled) return;

      dragCountRef.current--;
      if (dragCountRef.current === 0) {
        setDropState("idle");
        setMessage("");
      }
    },
    [disabled],
  );

  const handleDragOver = useCallback((e: DragEvent) => {
    // Only prevent default if dragging files
    if (e.dataTransfer && e.dataTransfer.types.includes("Files")) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;

      dragCountRef.current = 0;
      setDropState("idle");

      const files = Array.from(e.dataTransfer.files);
      const imageFile = files.find((file) => file.type.startsWith("image/"));

      if (imageFile) {
        processFile(imageFile);
      } else {
        setDropState("error");
        setMessage("Please drop a valid image file");
        resetState();
      }
    },
    [disabled, processFile, resetState],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        processFile(file);
      }
      // Reset input value so same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [processFile],
  );

  const handleClick = useCallback(() => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [disabled]);

  const getStateIcon = () => {
    switch (dropState) {
      case "dragover":
        return <UploadIcon className="w-6 h-6" />;
      case "processing":
        return <QRIcon className="w-6 h-6 animate-pulse" />;
      case "success":
        return <SuccessIcon className="w-6 h-6 text-green-400" />;
      case "error":
        return <ErrorIcon className="w-6 h-6 text-red-400" />;
      default:
        return <QRIcon className="w-6 h-6" />;
    }
  };

  const getStateColors = () => {
    switch (dropState) {
      case "dragover":
        return "border-brand-gold bg-brand-gold/10 text-brand-gold";
      case "processing":
        return "border-brand-arcane bg-brand-arcane/10 text-brand-arcane";
      case "success":
        return "border-green-400 bg-green-400/10 text-green-400";
      case "error":
        return "border-red-400 bg-red-400/10 text-red-400";
      default:
        return disabled
          ? "border-brand-inactivedark bg-brand-inactivedark/5 text-brand-inactivedark cursor-not-allowed"
          : "border-brand-arcane/30 bg-brand-midnight/20 text-brand-light hover:border-brand-arcane/50 hover:bg-brand-arcane/5 cursor-pointer";
    }
  };

  return (
    <>
      <div
        className={classNames(
          "relative",
          "border-2 border-dashed rounded-xl",
          "p-4 text-center",
          "transition-all duration-200",
          "min-h-[100px]",
          "flex flex-col items-center justify-center",
          getStateColors(),
          className,
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Drop QR code image or click to select"
      >
        {getStateIcon()}

        <div className="mt-2">
          <div className="text-sm font-medium">
            {dropState === "idle" && !disabled && "Drop QR code image here"}
            {dropState === "idle" && disabled && "QR scanner disabled"}
            {dropState !== "idle" && message}
          </div>

          {dropState === "idle" && !disabled && (
            <div className="text-xs text-brand-inactivedark mt-1">
              or click to select from files
            </div>
          )}
        </div>

        {/* Magic Craft styling enhancements */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          {dropState === "dragover" && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-gold/20 to-brand-arcane/20 animate-shimmer" />
          )}

          {dropState === "success" && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 animate-pulse" />
          )}
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />
    </>
  );
};

export default QRDropZone;
