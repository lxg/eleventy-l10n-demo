module.exports = async () => {
    const { getConfig } = await import("@lxg/l10n/lib")
    return [ "en-GB", ...getConfig().locales ]
}
