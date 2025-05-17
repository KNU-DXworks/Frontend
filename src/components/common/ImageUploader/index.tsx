// import { useEffect } from "react";

// import { Plus } from "lucide-react";

// import { useImageUpload } from "@/hooks/useImageUpload";

// import { cn } from "@/lib/utils";

// export interface FileUploadProps {
//     className?: string;
//     onChange?: (image: File | null) => void;
// }

// export const ImageUploader = ({ className, onChange }: FileUploadProps) => {
//     const { isUploaded, previewURL, image, fileType, fileInputRef, handleImageUpload, handleImageChange } =
//         useImageUpload();

//     useEffect(() => {
//         if (image && onChange) {
//             onChange(image);
//         }
//     }, [image, onChange]);

//     return (
//         <div
//             className={cn(
//                 "flex w-full h-[280px] border-2 rounded-xl hover:cursor-pointer justify-center items-center border-darkGray border-dashed",
//                 className,
//             )}
//             onClick={handleImageUpload}
//         >
//             {!isUploaded ? (
//                 <div className="flex flex-col justify-center">
//                     <Plus className="block mx-auto" size={30} />
//                     <label>파일 업로드</label>
//                 </div>
//             ) : (
//                 <>
//                     {fileType.startsWith("image/") && (
//                         <img
//                             className="block w-full h-full rounded-[inherit] object-cover"
//                             src={previewURL}
//                             alt="uploaded-image"
//                         />
//                     )}
//                     {fileType === "application/pdf" && (
//                         <embed
//                             className="block w-full h-full rounded-[inherit] pointer-events-none"
//                             src={previewURL}
//                             type="application/pdf"
//                         />
//                     )}
//                 </>
//             )}
//             <input
//                 className="hidden"
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*,application/pdf"
//                 onChange={handleImageChange}
//             />
//         </div>
//     );
// };

// src/components/common/ImageUploader.tsx
import { Plus } from "lucide-react";
import { useEffect } from "react";

import clsx from "clsx";
import { useImageUpload } from "@/hooks/useImageUpload";

export interface FileUploadProps {
    className?: string;
    onChange?: (file: File | null) => void;
}

export const ImageUploader = ({ className, onChange }: FileUploadProps) => {
    const { isUploaded, image, previewURL, fileInputRef, handleImageUpload, handleImageChange } = useImageUpload();

    useEffect(() => {
        onChange?.(image);
    }, [image, onChange]);

    return (
        <div
            className={clsx(
                "flex w-full h-[280px] border-2 rounded-xl hover:cursor-pointer justify-center items-center border-darkGray border-dashed",
                className,
            )}
            onClick={handleImageUpload}
        >
            {!isUploaded ? (
                <div className="flex flex-col justify-center">
                    <Plus size={30} className="mx-auto" />
                    <label>파일 업로드</label>
                </div>
            ) : image?.type.startsWith("image/") ? (
                <img src={previewURL} alt="uploaded-image" className="w-full h-full object-cover rounded-[inherit]" />
            ) : (
                <embed src={previewURL} type="application/pdf" className="w-full h-full rounded-[inherit]" />
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={handleImageChange}
            />
        </div>
    );
};
