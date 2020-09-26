import State from './State'

class Depth {

    constructor() {
        this.visited = []
    }
    
    search(state_start, state_final, lab) {

        if(this.visited.filter( (visit) => {
            if((visit.getX() === state_start.getX()) && (visit.getY() === state_start.getY())) {
                return true
            }
        }).length > 0) {
            return
        }

        this.visited.push(new State(state_start.getX(), state_start.getY()))
    
        if(state_start.getX() === state_final.getX() && state_start.getY() === state_final.getY()) {
            console.log('found')
            console.log(this.toString(state_start, lab, state_final))
            return
        }
        
        this.search(this.move_down(state_start,lab),state_final,lab)
        this.search(this.move_up(state_start,lab),state_final,lab)
        this.search(this.move_left(state_start,lab),state_final,lab)
        this.search(this.move_right(state_start,lab),state_final,lab)
    }

    move_up(state, lab) {
        if(lab[state.getX()-1][state.getY()] !== '#') {
            lab[state.getX()-1][state.getY()] = '2'
            return new State(state.getX()-1, state.getY())
        } else {
            return state
        }
    }

    move_down(state, lab) {
       
        if(lab[state.getX()+1][state.getY()] !== '#') {
            lab[state.getX()+1][state.getY()] = '2'
            return new State(state.getX()+1, state.getY())
        } else {
            return state
        }
    }

    move_left(state, lab) {
        if(lab[state.getX()][state.getY()-1] !== '#') {
            lab[state.getX()][state.getY()-1] = '2'
            return new State(state.getX(), state.getY()-1)
        } else {
            return state
        }
    }

    move_right(state, lab) {
        if(lab[state.getX()][state.getY()+1] !== '#') {
            lab[state.getX()][state.getY()+1] = '2'
            return new State(state.getX(), state.getY()+1)
        } else {
            return state
        }
    }

    toString(state, lab, position_final) {
        let result = ''
        let wall = '▒'
        wall += wall

        for(let i = 0; i < lab.length; i++) {
            for(let j = 0; j < lab[i].length; j ++){
                let actual = lab[i][j]
                if(i === state.getX() && j === state.getY()) {
                    result += 'OK'
                } else if(i === position_final.getX() && j === position_final.getY()) {
                    result += '__'
                }else if (actual == '0') {
                    result += '  '
                } else if (actual == '#') {
                    result += wall
                } else if (actual == '2') {
                    result  += '**'
                }
            }
            result += '\n'
        }
        return result
    }

}


export default Depth;