import { ObjectID as ObjectIDMongo } from 'mongodb'
export const ObjectID = (value: string | ObjectIDMongo): ObjectIDMongo => {
  return typeof value === 'string' ? new ObjectIDMongo(value) : value
}
