import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EnclosingPageNotification
 */
export class EnclosingPageNotification extends Card {
  public notificationJsonBody?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EnclosingPageNotification';
  }

  /**
   * Get property definitions for EnclosingPageNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNotificationJsonBody',
        tsPropertyName: 'notificationJsonBody',
        type: 'string',
        required: false
      }
    ];
  }


}
