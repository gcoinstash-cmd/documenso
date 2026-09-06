describe('Wave Sprint: Document Recipient Signing Token Expiry Guard', () => {
  const isTokenExpired = (expiresAt: Date, currentTime: Date): boolean => {
    return currentTime.getTime() > expiresAt.getTime();
  };

  it('should allow signature token when within valid lifespan', () => {
    const now = new Date('2026-09-06T12:00:00Z');
    const futureExpiry = new Date('2026-09-06T13:00:00Z');
    expect(isTokenExpired(futureExpiry, now)).toBe(false);
  });

  it('should reject signature token when current time exceeds expiration', () => {
    const now = new Date('2026-09-06T14:00:00Z');
    const pastExpiry = new Date('2026-09-06T13:00:00Z');
    expect(isTokenExpired(pastExpiry, now)).toBe(true);
  });
});
