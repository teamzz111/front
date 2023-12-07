import { InternalRequestUpdateUser } from "@/actions/user/models";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react";

interface User {
  _id: string;
  name: string;
  purchases: number;
  email: string;
  isActive: boolean;
}

interface UsersTableType {
  users?: User[];
  onDeleteUser: (v: string) => void;
  onUpdateUser: (data: InternalRequestUpdateUser) => void;
}

export default function UsersTable({
  users,
  onDeleteUser,
  onUpdateUser,
}: UsersTableType) {
  const onIncrement = (purchases: number, id: string) =>
    onUpdateUser({
      data: {
        purchases: purchases + 1,
      },
      id,
    });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Purchases</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>State</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.purchases}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Badge
                className="cursor-pointer"
                onClick={() => onDeleteUser(user._id)}
                color={"red"}
              >
                Borrar
              </Badge>
              <Badge
                className="cursor-pointer"
                onClick={() => onIncrement(user.purchases, user._id)}
                color={"yellow"}
              >
                Aumentar compras
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
