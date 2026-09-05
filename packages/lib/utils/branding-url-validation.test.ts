import { describe, expect, it } from 'vitest';

describe('Wave 1: Documenso Safe Branding URL Sanitization', () => {
  const sanitizeUrl = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) {
      return '';
    }
    if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:')) {
      return '';
    }
    return trimmed;
  };

  it('should retain valid HTTPS branding asset URLs', () => {
    const url = 'https://assets.documenso.com/logo.png';
    expect(sanitizeUrl(url)).toBe(url);
  });

  it('should strip dangerous javascript execution schemes', () => {
    const dangerous = 'javascript:alert(1)';
    expect(sanitizeUrl(dangerous)).toBe('');
  });

  it('should safely handle whitespace padded domain links', () => {
    const padded = '   https://documenso.com   ';
    expect(sanitizeUrl(padded)).toBe('https://documenso.com');
  });
});
