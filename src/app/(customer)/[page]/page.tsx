import { ChatView, ListingsView, NotificationsView, ProfileView, SavedView, SettingsView, WalletView } from "@/components/app/customer-app";

const screens = { chat: ChatView, listings: ListingsView, notifications: NotificationsView, profile: ProfileView, saved: SavedView, settings: SettingsView, wallet: WalletView };

export default async function Page({ params }: PageProps<'/[page]'>) {
  const { page } = await params;
  const Screen = screens[page as keyof typeof screens] ?? ProfileView;
  return <Screen />;
}
