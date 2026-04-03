(function AncientSwordMod() {
    ModAPI.meta.title("Ancient Sword");
    ModAPI.meta.description("Renames the Diamond Sword to Ancient Sword");
    ModAPI.meta.credits("By You");
    ModAPI.meta.version("v1.0");

    ModAPI.dedicatedServer.appendCode(function () {

        ModAPI.hooks.methods.nm_ItemStack_getDisplayName = function (original, itemStack) {
            try {
                var item = itemStack.getItem();
                var unloc = item.func_77658_a(); // getUnlocalizedName()

                if (unloc && unloc.includes("diamond_sword")) {
                    return ModAPI.util.str("Ancient Sword");
                }
            } catch (e) {}

            return original(itemStack);
        };

    });
})();
