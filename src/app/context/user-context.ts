import React from 'react'
import { User } from '../../core/models/user.model'

export const UserContext = React.createContext<User | null>(null)
