interface IMovie {
  id: number;
  title: String;
  release_date: String;
  poster_path: String;
}

interface ICrew {
  job: string;
  department: string;
  profile_path: string;
  name: string;
}

interface ICast {
  cast_id: number;
  id: number;
  character: string;
  name: string;
  profile_path: string;
}

interface ICredit {
  id: number;
  cast: ICast[];
  crew: ICrew[];
}
export {IMovie, ICredit};
