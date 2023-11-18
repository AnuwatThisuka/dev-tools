import { z } from "zod"

export const AwesomeListSchema = z.object({
  name: z.string(),
  key: z.string(),
  description: z.string(),
  link: z.array(
    z.object({
      name: z.string(),
      link: z.string(),
      demo: z.string(),
      docs: z.string(),
      description: z.string(),
    })
  ),
})

export type IZAwesomeList = z.infer<typeof AwesomeListSchema>
