/**
 * @license
 * Bowser65's Personal Website
 * Copyright (C) 2017-2019 Bowser65
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import img2016 from '../assets/avatar.2016.png'
import img2018 from '../assets/avatar.2018.png'

switch (window.location.search) {
  case '?2016':
    document.querySelector('.avatar').src = img2016
    break
  case '?2018':
    document.querySelector('.avatar').src = img2018
    break
}

const date = new Date()
const years = date.getFullYear() - 2014 + (date.getMonth() >= 6 ? 1 : 0)
document.querySelector('#years').innerText = years
