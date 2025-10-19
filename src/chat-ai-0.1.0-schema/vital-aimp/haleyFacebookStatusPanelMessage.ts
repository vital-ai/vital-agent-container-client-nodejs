import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyFacebookStatusPanelMessage
 */
export class HaleyFacebookStatusPanelMessage extends HaleyMessage {
  public newStatus?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyFacebookStatusPanelMessage';
  }

  /**
   * Get property definitions for HaleyFacebookStatusPanelMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNewStatus',
        tsPropertyName: 'newStatus',
        type: 'string',
        required: false
      }
    ];
  }


}
