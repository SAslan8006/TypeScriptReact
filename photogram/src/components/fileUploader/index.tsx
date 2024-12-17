import { FileEntry } from "@/types";
import "@uploadcare/react-uploader/core.css";
import { useCallback } from "react";
import React, { useRef, useEffect } from "react";
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
  const handleFileUpload = (info: any) => {
    console.log("Upload info: ", info);

    // info.files() ile dosya listesini al
    const filePromises = info.files ? info.files() : [];

    // Tüm dosyaları bekle ve işleme
    Promise.all(filePromises)
      .then((files: any[]) => {
        const newFiles = files.map((file) => ({
          cdnUrl: file.cdnUrl,
          uuid: file.uuid,
        }));

        const updatedFiles = [...fileEntry.files, ...newFiles];
        onChange({ files: updatedFiles });
      })
      .catch((error) => console.error("File upload error:", error));
  };

  return (
    <div>
      {/* Yükleme Bileşeni */}
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
