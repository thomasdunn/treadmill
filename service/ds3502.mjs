import i2c from 'i2c-bus'
import aod from '@johntalton/and-other-delights'
const { I2CAddressedBus } = aod
import { DS3502 } from '@johntalton/ds3502'

const busNumber = 1
const busAddress = 0x28

const i2c1 = await i2c.openPromisified(busNumber)
const ds = await DS3502.from(new I2CAddressedBus(i2c1, busAddress))

export function ds3502(wiperValue) {
  return ds.setProfile({ WR: wiperValue });
}

