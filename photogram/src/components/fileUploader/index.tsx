import { FileEntry } from "@/types";
import "@uploadcare/react-uploader/core.css";
import { useCallback } from "react";
import React, { useRef } from "react";
import {
  FileUploaderRegular,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

interface IFileUploaderProps {
  fileEntry: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = ({
  fileEntry,
  onChange,
}) => {
  const uploaderRef = useRef<InstanceType<UploadCtxProvider> | null>(null);
  // Dosya Kaldırma İşlemi
  const handleRemoveClick = useCallback(
    (uuid: string) => {
      const updatedFiles = fileEntry.files.filter((f) => f.uuid !== uuid);
      onChange({ files: updatedFiles });
    },
    [fileEntry.files, onChange]
  );

  // Dosya Yükleme İşlemi
  const handleFileUpload = async (info: any) => {
    // Eğer `info` nesnesi farklı bir yapıdaysa doğru alanı belirleyin
    const fileEntries = info.entries || info.allEntries || info.files || [];
    if (!Array.isArray(fileEntries)) {
      console.error("Dosya girişleri alınamadı:", fileEntries);
      return;
    }

    // Dosya bilgilerini işle
    const validFiles = fileEntries
      .map((entry: any) => {
        if (entry.cdnUrl && entry.uuid) {
          return { cdnUrl: entry.cdnUrl, uuid: entry.uuid };
        }
        console.warn("Eksik bilgiye sahip bir dosya:", entry);
        return null;
      })
      .filter(Boolean);

    if (validFiles.length === 0) {
      console.warn("Geçerli bir dosya bulunamadı.");
      return;
    }

    // Dosyaları `onChange` ile bildir
    const updatedFiles = [...fileEntry.files, ...validFiles];
    onChange({ files: updatedFiles });
  };

  return (
    <div>
      {/* Yükleme Bileşeni ya*/}
      <FileUploaderRegular
        pubkey="685f50edc277b5811ba6"
        multiple
        onChange={handleFileUpload}
        sourceList="local, gdrive, url, camera, dropbox"
        classNameUploader="uc-light"
      />
      {/* Yüklenen Dosyaları Listeleme */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {fileEntry.files.map((file) => (
          <div key={file.uuid} className="relative">
            <div className="absolute top-0 right-0">{file.name}</div>
            <img
              src={`${file.cdnUrl}/-/format/webp/-/quality/smart/-/stretch/fill/`}
              alt="Uploaded file"
            />
            <div className="cursor-pointer flex justify-center absolute -right-2 -top-2 bg-white border-2 border-slate-800 rounded-full w-7 h-7">
              <button
                className="text-slate-800 text-center"
                type="button"
                onClick={() => handleRemoveClick(file.uuid)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
