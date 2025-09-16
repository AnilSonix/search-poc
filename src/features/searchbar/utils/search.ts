import { z } from "zod";

const SearchInputSchema = z.object({
  query: z.string(),
});

export type SearchInputSchemaType = z.infer<typeof SearchInputSchema>;

const SearchOutputSchema = z.object({
  all: z.number(),
  files: z.number(),
  peoples: z.number(),
  chats: z.number(),
  list: z.number(),
});
export type SearchOutputSchemaType = z.infer<typeof SearchOutputSchema>;

export async function search(data: SearchInputSchemaType) {
  const _data = SearchInputSchema.parse(data);
  console.log({ _data });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return SearchOutputSchema.parse({
    all: 3,
    files: 6,
    peoples: 8,
    chats: 1,
    list: 9,
  });
}
