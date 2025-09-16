import FileRow from "./file-row";
import List from "./list";

export default function FilesContent() {
  return (
    <List
      data={[
        {
          id: "1",
          filename: "Training.mp4",
          location: "Education",
          link: "https://google.com",
        },
        {
          id: "2",
          filename: "resume.pdf",
          location: "Active 5m ago",
          link: "https://google.com",
        },
        {
          id: "3",
          filename: "Course outline.docx",
          location: "university",
          link: "https://google.com",
        },
      ]}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <FileRow {...item} />}
    />
  );
}
