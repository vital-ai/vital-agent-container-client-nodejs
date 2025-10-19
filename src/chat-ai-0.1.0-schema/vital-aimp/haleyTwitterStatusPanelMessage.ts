import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyTwitterStatusPanelMessage
 */
export class HaleyTwitterStatusPanelMessage extends HaleyMessage {
  public newStatus?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyTwitterStatusPanelMessage';
  }

  /**
   * Get property definitions for HaleyTwitterStatusPanelMessage
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
