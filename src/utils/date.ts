const transformDate = (date: string | Date) => {
    return new Date(date).toString();
};

export { transformDate };