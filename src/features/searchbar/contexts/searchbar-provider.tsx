import constate from "constate";
import { ListChecks, MessageSquare, Paperclip, User } from "lucide-react";
import { useDeferredValue, useState } from "react";
import AllContent from "../components/all-content";
import ChatsContent from "../components/chats-content";
import FilesContent from "../components/files-content";
import ListContent from "../components/list-content";
import PeopleContent from "../components/people-content";
import useSearch from "../hooks/use-search";

type useSearchBarContextProps = {};

function useSearchBar(props: useSearchBarContextProps) {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const [opened, setOpened] = useState(false);
  const query = useSearch({ query: deferredText, enabled: opened });
  const [tabs, setTabs] = useState([
    {
      id: "all",
      label: "All",
      visible: true,
      configurable: false,
      content: AllContent,
    },
    {
      id: "peoples",
      label: "Peoples",
      visible: true,
      icon: User,
      configurable: true,
      content: PeopleContent,
    },
    {
      id: "chats",
      label: "Chats",
      icon: MessageSquare,
      visible: true,
      configurable: true,
      content: ChatsContent,
    },
    {
      id: "files",
      label: "Files",
      visible: false,
      icon: Paperclip,
      configurable: true,
      content: FilesContent,
    },
    {
      id: "list",
      label: "List",
      visible: false,
      icon: ListChecks,
      configurable: true,
      content: ListContent,
    },
  ]);

  function toggleTab(tabId: string) {
    console.log(tabId);

    setTabs((tabs) =>
      tabs.map((t) => (t.id === tabId ? { ...t, visible: !t.visible } : t))
    );
  }
  function isVisible(tabId: string) {
    return Boolean(tabs.find((t) => t.id === tabId)?.visible);
  }

  return {
    props,
    tabs,
    toggleTab,
    isVisible,
    text,
    setText,
    query,
    opened,
    setOpened,
  };
}

export const [SearchBarProvider, useSearchBarContext] = constate(useSearchBar);
