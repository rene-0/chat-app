export const handlePressEnter = async (event: React.KeyboardEvent<HTMLInputElement>, callback: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void> | void) => {
  if (event.key === 'Enter') {
    await callback(event)
  }
}
