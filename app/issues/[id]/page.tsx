import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIsssueButton from "./EditIsssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ sm: "1", md: "2" }} gap={"5"}>
      <Box>
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <EditIsssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
