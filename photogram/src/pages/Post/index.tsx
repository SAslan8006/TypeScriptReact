import FileUploader from "@/components/fileUploader";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { useUserAuth } from "@/context/userAuthContext";
import { createPost } from "@/repository/post.service";
import { FileEntry, PhotoMeta, Post } from "@/types";
import { useNavigate } from "react-router-dom";

type Props = {};

const CreatePost: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const [fileEntry, setFileEntry] = useState<FileEntry>({ files: [] });
  const [post, setPost] = useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Yüklenen dosyalardan fotoğraf meta bilgisi oluştur
    const photoMeta: PhotoMeta[] = fileEntry.files.map((file) => ({
      cdnUrl: file.cdnUrl,
      uuid: file.uuid,
    }));
    console.log("photoMeta: ", photoMeta);
    if (user) {
      const newPost: Post = {
        ...post,
        userId: user?.uid || null,
        photos: photoMeta, // Resim verilerini burada Firestore'a gönderiyoruz
      };

      console.log("The final post is: ", newPost);

      try {
        await createPost(newPost); // Firestore yükleme işlemi
        navigate("/"); // Başarılı işlem sonrası yönlendirme
      } catch (error) {
        console.error("Post oluşturma sırasında bir hata oluştu:", error);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="border max-w-3xl w-full">
          <h3 className="bg-slate-800 text-white text-center text-lg p-2">
            Create Post
          </h3>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="caption">
                  Photo Caption
                </Label>
                <Textarea
                  className="mb-8"
                  id="caption"
                  placeholder="what's in your photo!"
                  value={post.caption}
                  onChange={(e) =>
                    setPost({ ...post, caption: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <Label className="mb-4" htmlFor="photo">
                  Photos
                </Label>
                <FileUploader fileEntry={fileEntry} onChange={setFileEntry} />
              </div>
              <Button className="mt-8 w-32" type="submit">
                Post
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePost;
