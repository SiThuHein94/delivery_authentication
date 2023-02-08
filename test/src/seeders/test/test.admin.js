module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'admins',
            [
                {
                    id: 1,
                    name: 'Jane',
                    login_id: "jane",
                    phone_number: "1234556",
                    password: '$2a$08$YfTJwifQE1dXibx/jL9odu70eBaXE5B12tbJE66ICHlUh02n5tt0G',
                    createdAt: '2023-02-02 07:17:17',
                    updatedAt: '2023-02-02 07:17:17',
                },
                {
                    id: 2,
                    name: 'tester2',
                    login_id: "tester2",
                    phone_number: "123",
                    password: '$2a$08$YfTJwifQE1dXibx/jL9odu70eBaXE5B12tbJE66ICHlUh02n5tt0G',
                    createdAt: '2023-02-02 07:17:17',
                    updatedAt: '2023-02-02 07:17:17',
                },

            ],
            {}
        ),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete('admins', null, {}),
};
