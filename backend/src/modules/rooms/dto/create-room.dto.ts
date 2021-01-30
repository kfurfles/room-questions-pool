export class CreateRoomDto {
    userId: string;
    name: string;
    password?: string;
    questions: { name: string }[];
}
