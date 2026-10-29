// The service chip chosen in the contact form; set from the service links too.
export const useSelectedService = () => useState<string>('selected-service', () => 'Website')
