import { SanityClient } from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"

const client = SanityClient({
    projectId: "9jxrviei",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = ImageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

export { client, urlFor }