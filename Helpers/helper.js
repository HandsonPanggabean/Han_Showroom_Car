function getRupiahIDR (value) {
    return 'Rp' + value.toLocaleString('id-ID') + ',00'
}

module.exports = getRupiahIDR