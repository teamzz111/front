import { Card, Title, Text } from "@tremor/react";
import Search from "../../components/search";
import UsersTable from "../../components/table";
import AuthChecker from "@/components/AuthChecker/AuthChecker";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage() {
  const users = [];

  return (
    <AuthChecker>
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Users</Title>
        <Text>A list of users retrieved from a Postgres database.</Text>
        <Card className="mt-6">{/* <UsersTable users={users} /> */}</Card>
      </main>
    </AuthChecker>
  );
}
