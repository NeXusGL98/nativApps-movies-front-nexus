import { MovieTypePipe } from './movie-type.pipe';

describe('MovieTypePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieTypePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should convert movies type to películas', () => {
    const pipe = new MovieTypePipe();
    expect(pipe.transform('movie')).toEqual('película');
    expect(pipe.transform('movie')).not.toEqual('series');
  });

  it('Should convert series type to serie', () => {
    const pipe = new MovieTypePipe();
    expect(pipe.transform('series')).toEqual('serie');
    expect(pipe.transform('series')).not.toEqual('movie');
  });
});
