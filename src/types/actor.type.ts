import { Document } from 'mongoose';
import { movieType } from './movie.type';

export type actorType = {
  name: string;
  photoUrl: string;
  dateofBirth: string;
  country: string;
  movies: movieType[];
} & Document;
