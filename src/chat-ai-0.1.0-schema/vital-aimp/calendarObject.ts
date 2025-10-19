import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarObject
 */
export class CalendarObject extends Card {
  public calendars?: string[];
  public endDate?: string | Date;
  public startDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CalendarObject';
  }

  /**
   * Get property definitions for CalendarObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCalendars',
        tsPropertyName: 'calendars',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndDate',
        tsPropertyName: 'endDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStartDate',
        tsPropertyName: 'startDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
