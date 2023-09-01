import {createClient} from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
      projectId:"z20fkgcg",
      dataset:"production",
      apiVersion:"v2021-10-21",
      useCdn:true,
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source:any) =>{
    return builder.image(source)
}