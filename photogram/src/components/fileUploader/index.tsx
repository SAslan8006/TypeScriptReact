import { FileEntry } from "@/types";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRef, useState } from "react";
import * as UC from "@uploadcare/file-uploader";

import st from "./FileUploader.module.scss";
import cs from "classnames";

UC.defineComponents(UC);
interface IFileUploaderProps {
  fileEntry: FileEntry;
  onFileChange: (fileEntry: FileEntry) => void;
}
type FileUploaderProps = {
  uploaderClassName: string;
  uploaderCtxName: string;
  files: UC.OutputFileEntry[];
  onChange: (files: UC.OutputFileEntry[]) => void;
  theme: "light" | "dark";
};

const FileUploader: React.FC<IFileUploaderProps> = ({
  files,
  uploaderClassName,
  uploaderCtxName,
  onChange,
  theme,
}: FileUploaderProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileEntry>(fileEntry);
  const ctxProviderRef = useRef<InstanceType<UC.UploadCtxProvider>>(null);
  const configRef = useRef<InstanceType<UC.Config>>(null);
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, gdrive, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="685f50edc277b5811ba6"
      />
    </div>
  );
};

export default FileUploader;
