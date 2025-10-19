import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogExitBot
 */
export class DialogExitBot extends DialogAction {
  public keepChannelEntryText?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogExitBot';
  }

  /**
   * Get property definitions for DialogExitBot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isKeepChannelEntryText',
        tsPropertyName: 'keepChannelEntryText',
        type: 'boolean',
        required: false
      }
    ];
  }


}
