/**
 * QR Code Scanner using html5-qrcode library
 * Specifically designed for file-based QR scanning
 */

import { Html5Qrcode } from "html5-qrcode";

export interface QRScanResult {
  success: boolean;
  data?: string;
  error?: string;
}

/**
 * Scan QR code from uploaded file using html5-qrcode
 */
export async function scanQRFromFile(file: File): Promise<QRScanResult> {
  try {
    console.log("🔍 Starting QR scan with html5-qrcode library...");
    console.log("📁 File info:", {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    // Create temporary DOM element for html5-qrcode
    const tempDiv = document.createElement("div");
    tempDiv.id = "temp-qr-scanner-" + Date.now();
    tempDiv.style.display = "none";
    document.body.appendChild(tempDiv);

    try {
      // Create instance and use scanFile method
      const html5QrCode = new Html5Qrcode(tempDiv.id);
      const qrCodeResult = await html5QrCode.scanFile(
        file,
        /* showImage= */ false,
      );

      // Clean up
      html5QrCode.clear();
      document.body.removeChild(tempDiv);

      console.log("🎯 QR Code detected:", qrCodeResult);
      console.log(
        "📝 QR data:",
        qrCodeResult.substring(0, 100) +
          (qrCodeResult.length > 100 ? "..." : ""),
      );

      // Extract address from QR data
      const address = extractAddressFromQRData(qrCodeResult);
      console.log("🔍 Extracted address:", address);

      if (!address) {
        console.log("❌ No valid address found in QR data");
        return {
          success: false,
          error: "No valid address found in QR code",
        };
      }

      console.log("✅ Successfully extracted address:", address);
      return {
        success: true,
        data: address,
      };
    } catch (error) {
      // Clean up on error
      if (document.body.contains(tempDiv)) {
        document.body.removeChild(tempDiv);
      }
      throw error;
    }
  } catch (error) {
    console.log("❌ QR scan failed:", error);
    console.log("❌ Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      name: error instanceof Error ? error.name : "Unknown",
    });

    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to scan QR code",
    };
  }
}

/**
 * Extract Ethereum address from QR code data
 * Supports various formats: plain address, ethereum: URI, ENS names
 */
function extractAddressFromQRData(qrData: string): string | null {
  console.log("🔍 Extracting address from QR data:", qrData);

  // Remove whitespace
  const cleanData = qrData.trim();

  // 1. Check if it's a plain Ethereum address (0x followed by 40 hex characters)
  const addressMatch = cleanData.match(/^(0x[a-fA-F0-9]{40})$/);
  if (addressMatch) {
    console.log("✅ Found plain address:", addressMatch[1]);
    return addressMatch[1];
  }

  // 2. Check if it's an ethereum: URI (EIP-681)
  const ethereumUriMatch = cleanData.match(/^ethereum:([^?@]+)/i);
  if (ethereumUriMatch) {
    const addressPart = ethereumUriMatch[1];

    // Extract address from the URI part
    const uriAddressMatch = addressPart.match(/^(0x[a-fA-F0-9]{40})/);
    if (uriAddressMatch) {
      console.log("✅ Found address from ethereum URI:", uriAddressMatch[1]);
      return uriAddressMatch[1];
    }

    // Check if it's an ENS name in the URI
    if (addressPart.includes(".eth")) {
      console.log("✅ Found ENS name from ethereum URI:", addressPart);
      return addressPart;
    }
  }

  // 3. Check if it's just an ENS name
  if (cleanData.match(/^[a-zA-Z0-9-]+\.eth$/)) {
    console.log("✅ Found ENS name:", cleanData);
    return cleanData;
  }

  // 4. Look for any address pattern within the string
  const embeddedAddressMatch = cleanData.match(/(0x[a-fA-F0-9]{40})/);
  if (embeddedAddressMatch) {
    console.log("✅ Found embedded address:", embeddedAddressMatch[1]);
    return embeddedAddressMatch[1];
  }

  // 5. Look for ENS names within the string
  const embeddedEnsMatch = cleanData.match(/([a-zA-Z0-9-]+\.eth)/);
  if (embeddedEnsMatch) {
    console.log("✅ Found embedded ENS name:", embeddedEnsMatch[1]);
    return embeddedEnsMatch[1];
  }

  console.log("❌ No valid address or ENS name found in QR data");
  return null;
}

/**
 * Get user-friendly error message for QR scan failures
 */
export function getQRErrorMessage(error: string): string {
  if (
    error.includes("No QR code found") ||
    error.includes("QR code parse error")
  ) {
    return "No QR code detected in the image. Please try a clearer image.";
  }

  if (error.includes("No valid address found")) {
    return "QR code found, but it doesn't contain a valid Ethereum address.";
  }

  if (
    error.includes("Failed to load image") ||
    error.includes("Unable to load")
  ) {
    return "Unable to load the image. Please try a different file.";
  }

  if (error.includes("valid image file") || error.includes("Unsupported")) {
    return "Please drop a valid image file (PNG, JPG, GIF, etc.).";
  }

  return "Failed to scan QR code. Please try a different image.";
}

/**
 * Debug function to help troubleshoot QR detection
 */
export function debugQRDetection(enable: boolean = true) {
  if (enable) {
    console.log("🔍 QR Debug Mode Enabled (html5-qrcode library)");
    console.log("- Library: html5-qrcode v2.3.8");
    console.log("- File scanning: ✅");
    console.log("- Logo overlay handling: ✅");
    console.log("- EIP-681 URI support: ✅");
    console.log("- ENS name support: ✅");
    console.log("- Multiple format support: ✅");
  }
}
