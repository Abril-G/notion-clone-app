import Document from "@/components/Document";

export default function DocumentPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {    
  return (
    <div className="flex flex-col flex-1 min-h-1 bg-white p-4">
      <Document id={id}/>
    </div>
  )
}