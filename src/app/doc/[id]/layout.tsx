import { auth } from "@clerk/nextjs/server";

const DocLayout = ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  auth().protect();
  return <RoomPro>DocLayout</div>;
};
export default DocLayout;
