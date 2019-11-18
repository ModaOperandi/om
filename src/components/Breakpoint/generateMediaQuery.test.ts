import { generateMediaQuery } from './generateMediaQuery';

describe('generateMediaQuery', () => {
  describe('at', () => {
    it('returns the media query isolating the sm breakpoint', () => {
      expect(generateMediaQuery({ mode: 'at', breakpoint: 'sm' })).toEqual(
        '(min-width: 25.0625rem) and (max-width: 48rem)'
      );
    });

    it('returns the media query isolating the xs breakpoint (bottom edge)', () => {
      expect(generateMediaQuery({ mode: 'at', breakpoint: 'xs' })).toEqual(
        '(min-width: 0) and (max-width: 25rem)'
      );
    });

    it('returns the media query isolating the xs breakpoint (top edge)', () => {
      expect(generateMediaQuery({ mode: 'at', breakpoint: 'xl' })).toEqual(
        '(min-width: 80.0625rem) and (max-width: 100rem)'
      );
    });
  });

  describe('lt', () => {
    it('returns the media query for below the sm breakpoint', () => {
      expect(generateMediaQuery({ mode: 'lt', breakpoint: 'sm' })).toEqual('(max-width: 48rem)');
    });

    it('returns the media query isolating the xs breakpoint (bottom edge)', () => {
      expect(generateMediaQuery({ mode: 'lt', breakpoint: 'xs' })).toEqual('(max-width: 25rem)');
    });

    it('returns the media query isolating the xs breakpoint (top edge)', () => {
      expect(generateMediaQuery({ mode: 'lt', breakpoint: 'xl' })).toEqual('(max-width: 100rem)');
    });
  });

  describe('gt', () => {
    it('returns the media query for below the sm breakpoint', () => {
      expect(generateMediaQuery({ mode: 'gt', breakpoint: 'sm' })).toEqual(
        '(min-width: 48.0625rem)'
      );
    });

    it('returns the media query isolating the xs breakpoint (bottom edge)', () => {
      expect(generateMediaQuery({ mode: 'gt', breakpoint: 'xs' })).toEqual(
        '(min-width: 25.0625rem)'
      );
    });

    it('returns the media query isolating the xs breakpoint (top edge)', () => {
      expect(generateMediaQuery({ mode: 'gt', breakpoint: 'xl' })).toEqual(
        '(min-width: 100.0625rem)'
      );
    });
  });
});
