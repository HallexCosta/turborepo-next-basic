// pre-loading schemas on database
// import {verbose} from 'sqlite3'
import * as schemas from './schemas'

const sqlite3 = require('sqlite3').verbose()
function startUpDatabaseIfNotExists() {
    const db = getDatabase()
    db.serialize(() => {
        const tables = Object.values(schemas)
        for (const commandCreateTable of tables) db.run(commandCreateTable);

        const persons = [
            {id: 'hallexcosta', name: 'Hállex', role: 'Desenvolvedor back-end PHP', created_at: new Date().toISOString() },
            {id: 'hallancosta', name: 'Hállan', role: 'Desenvolvedor back-end PHP', created_at: new Date().toISOString() }
        ]
        for (const person of persons)
            db.run('insert into persons(id, name, role, created_at) values(?, ?, ?, ?)', [
                person.id,
                person.name,
                person.role,
                person.created_at
            ])
    })
    return db
}
function getDatabase() {
    return new sqlite3.Database('./app/database/db.sqlite', (err) => {
        if (err) {
            console.error('Erro ao abrir o banco de dados:', err.message);
        } else {
            console.log('Conexão bem-sucedida ao banco de dados');
        }
    });
}

export {schemas, startUpDatabaseIfNotExists, getDatabase}