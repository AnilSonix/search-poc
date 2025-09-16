import List from "./list";
import PeopleRow from "./people-row";

export default function ListContent() {
  return (
    <List
      data={[
        {
          id: "1",
          name: "John Doe",
          lastSeen: "Active 3m ago",
          link: "https://google.com",
        },
        {
          id: "2",
          name: "Jane Doe",
          lastSeen: "Active 5m ago",
          link: "https://google.com",
        },
        {
          id: "3",
          name: "Mike Smith",
          lastSeen: "Active 6h ago",
          link: "https://google.com",
        },
      ]}
      keyExtractor={(item) => item.id}
      renderItem={(item) => <PeopleRow {...item} />}
    />
  );
}
