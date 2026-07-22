import { RoomDetailView } from "@/components/app/customer-app";
export default async function Page({ params }: PageProps<'/search/[roomId]'>) { const { roomId } = await params; return <RoomDetailView roomId={roomId} />; }
