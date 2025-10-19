import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent
 */
export class KGCalendarEvent extends KGNode {
  public kGCalendarEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCalendarEvent';
  }

  /**
   * Get property definitions for KGCalendarEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType',
        tsPropertyName: 'kGCalendarEventType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
