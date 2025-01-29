// extension-save.js
class SaveToComputer {
    getInfo() {
        return {
            id: 'savetocomputer',
            name: 'Save To Computer',
            blocks: [
                {
                    opcode: 'saveFile',
                    blockType: 'command',
                    text: 'save [TEXT] as [FILENAME]',
                    arguments: {
                        TEXT: {
                            type: 'string',
                            defaultValue: 'Hello World!'
                        },
                        FILENAME: {
                            type: 'string',
                            defaultValue: 'my-file.txt'
                        }
                    }
                }
            ]
        };
    }

    saveFile(args) {
        const text = args.TEXT;
        const filename = args.FILENAME;
        
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        
        document.body.appendChild(a);
        a.click();
        
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}

Scratch.extensions.register(new SaveToComputer());
