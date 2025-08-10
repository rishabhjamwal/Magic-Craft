/**
 * Enhanced ContactAutocomplete with QR Code Drop functionality
 * Extends the original ContactAutocomplete with QR code scanning capability
 */

import React, { forwardRef, useCallback } from "react";
import classNames from "clsx";
import { FieldMetaState } from "react-final-form";
import { AddressFieldProps } from "./AddressField";
import ContactAutocomplete from "./ContactAutocomplete";
import QRDropZone from "./QRDropZone";

type ContactAutocompleteWithQRProps = {
  meta: FieldMetaState<any>;
  setValue: (address: string) => void;
  injected?: boolean;
  showQRByDefault?: boolean;
} & AddressFieldProps;

const ContactAutocompleteWithQR = forwardRef<
  HTMLTextAreaElement,
  ContactAutocompleteWithQRProps
>(({ setValue, meta, className, ...rest }, ref) => {
  const handleAddressExtracted = useCallback(
    (address: string) => {
      setValue(address);
      // Keep QR zone visible after successful scan
    },
    [setValue],
  );

  return (
    <div className={classNames("relative", className)}>
      {/* QR Drop Zone - always visible */}
      <div className="mb-4">
        <div className="mb-2">
          <span className="text-sm font-medium text-brand-light">
            QR Code Scanner
          </span>
        </div>

        <QRDropZone
          onAddressExtracted={handleAddressExtracted}
          className="magiccraft-arcane-border bg-gradient-to-br from-brand-midnight/80 via-brand-arcane/10 to-brand-midnight/80 border border-brand-arcane/30"
          disabled={meta.submitting}
        />

        <div className="text-xs text-brand-inactivedark mt-2 text-center">
          Supports Ethereum addresses, ENS names, and wallet QR codes
        </div>
      </div>

      {/* Original ContactAutocomplete */}
      <ContactAutocomplete
        ref={ref}
        setValue={setValue}
        meta={meta}
        {...rest}
      />
    </div>
  );
});

ContactAutocompleteWithQR.displayName = "ContactAutocompleteWithQR";

export default ContactAutocompleteWithQR;
