/* istanbul ignore next */

export abstract class Mapper<I, O> {
  abstract mapFrom(parm: I): O;
}
