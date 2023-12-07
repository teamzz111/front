import AuthChecker from "@/components/AuthChecker/AuthChecker";
import Navbar from "@/components/Navbar/Navbar";
import { Card, Title, Text } from "@tremor/react";
import UsersTable from "@/components/UserTable/UserTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import UserService from "@/actions/user";
import toast from "react-hot-toast";
import { InternalRequestUpdateUser } from "@/actions/user/models";

export default function Home() {
  const { data, refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: UserService.getAll,
  });

  const { mutate: mutateDelete } = useMutation({
    mutationFn: UserService.deleteUser,
    onError: () => toast.error("Ha ocurrido un problema"),
    onSuccess: () => {
      refetch();
      toast.success("Usuario borrado");
    },
  });

  const onDeleteUser = (id: string) => mutateDelete(id);

  const { mutate: mutateUser } = useMutation({
    mutationFn: UserService.updateUser,
    onError: () => toast.error("Ha ocurrido un problema"),
    onSuccess: () => {
      refetch();
      toast.success("Usuario actualizado");
    },
  });

  const onUpdateUser = (data: InternalRequestUpdateUser) => mutateUser(data);

  return (
    <AuthChecker>
      <div>
        <Navbar />
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
          <Title>Users</Title>
          <Text>Modifique los usuarios del servidor</Text>
          <Card className="mt-6">
            <UsersTable
              onUpdateUser={onUpdateUser}
              onDeleteUser={onDeleteUser}
              users={data}
            />
          </Card>
        </main>
      </div>
    </AuthChecker>
  );
}
