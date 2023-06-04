const bookHelper = {
    changeBookTypeToVN: (typebook) => {
        switch (typebook) {
            case 'all':
                return 'Tất cả';
            case 'title':
                return 'Nhan đề';
            case 'author':
                return 'Tác giả';
            default:
                return 'Tất cả';
        }
    },
};

export default bookHelper;
