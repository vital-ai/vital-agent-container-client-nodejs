import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CalendarEvent
 */
export class CalendarEvent extends AIMPThing {
  public shortDescription?: string;
  public endDate?: string | Date;
  public fullDayEvent?: boolean;
  public locationString?: string;
  public calendarURI?: string;
  public startDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CalendarEvent';
  }

  /**
   * Get property definitions for CalendarEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isFullDayEvent',
        tsPropertyName: 'fullDayEvent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocationString',
        tsPropertyName: 'locationString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCalendarURI',
        tsPropertyName: 'calendarURI',
        type: 'string',
        required: false,
        format: 'uri'
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
