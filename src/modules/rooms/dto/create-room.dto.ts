export class CreateRoomDto {
    name: string;
    password?: string;
    questions: { name: string }[];
}
