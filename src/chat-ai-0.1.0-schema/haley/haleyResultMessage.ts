import { HaleyResponseMessage } from './haleyResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyResultMessage
 */
export class HaleyResultMessage extends HaleyResponseMessage {
  public haleyTotalResults?: number;
  public resultSequence?: number;
  public haleyOffset?: number;
  public haleyLimit?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyResultMessage';
  }

  /**
   * Get property definitions for HaleyResultMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyTotalResults',
        tsPropertyName: 'haleyTotalResults',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResultSequence',
        tsPropertyName: 'resultSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyOffset',
        tsPropertyName: 'haleyOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyLimit',
        tsPropertyName: 'haleyLimit',
        type: 'number',
        required: false
      }
    ];
  }


}
